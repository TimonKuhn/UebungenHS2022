import uvicorn
from fastapi import FastAPI

app = FastAPI()

d = {}
file = open("PLZO_CSV_LV95.csv", encoding="utf-8")
next(file)
for line in file:
    daten = line.strip().split(";")
    ort = daten[0]
    postleihzahl = daten[1]
    gemeinde = daten[3]
    kanton = daten[5]
    d[postleihzahl] = {"Ort": ort, "PLZ": postleihzahl, "Gemeinde": gemeinde, "kanton":kanton}
    file.close

#Ortschaftsname;PLZ;Zusatzziffer;Gemeindename;BFS-Nr;Kantonskürzel;E;N;Sprache

@app.get("/")
async def PLZ(Ort:str):
    print(Ort)
    if Ort in d:
        return d[Ort]
    return {"ERRORR": "ORT NOT FOUND"}

uvicorn.run(app, host="127.0.0.1", port=7999)
