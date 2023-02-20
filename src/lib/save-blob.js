import PocketBase from 'pocketbase'
const pb = new PocketBase('https://db.letscodeitalia.it');

export default async function (filename, blob) {

    var params = (new URL(document.location)).searchParams;
    var studente = params.get("studente");
    var lez = params.get("lez");
    var es = params.get("es");

    if (params.get("id") != null) {
        var recordId = params.get("id");
        sessionStorage.removeItem('lez'+lez+'es'+es);
        console.log('ho trovato param');
    } else {
        var recordId = sessionStorage.getItem('lez'+lez+'es'+es);
    }

    // aggiungi file
    const formData = new FormData();
    formData.append('file', blob, 'lez'+lez+'es'+es+'.sb3');

    // set some other regular text field value
    formData.append('corso', 'scratch');
    formData.append('studente', studente);
    formData.append('lezione', lez);
    formData.append('esercizio', es);

    // upload and create new record
    let record = null;
    if (recordId == null) {
        record = await pb.collection('esercizi').create(formData);
        sessionStorage.setItem('lez'+lez+'es'+es, record.id);
    } else {
        record = await pb.collection('esercizi').update(recordId, formData);
    }

    if (record) {
        console.log("Upload successful");
    } else {
        console.log("Upload failed", error);
    }

};