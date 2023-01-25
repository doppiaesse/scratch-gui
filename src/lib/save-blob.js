import PocketBase from 'pocketbase'
const pb = new PocketBase('https://pocketbase-letscode.fly.dev');

export default async function (filename, blob) {
    
    var params = (new URL(document.location)).searchParams;
    var recordId = params.get("id");
    var studente = params.get("studente");
    var fileName = params.get("file");
    var lez = params.get("lez");
    var es = params.get("es");

    // const { data, error } = await supabase
    //     .storage
    //     .from('progetti/Scratch/' + id)
    //     .upload(es + '.sb3', blob, {
    //     cacheControl: '3600',
    //     upsert: true
    //   });

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
    } else {
        record = await pb.collection('esercizi').update(recordId, formData);
    }

    // example create data
    // const data = {
    //     "corso": "python",
    //     "studente": studente,
    //     "lezione": lez,
    //     "esercizio": es,
    //     "dati": "test"
    // };

    // const record = await pb.collection('esercizi').create(data);

    if (record) {
        console.log("Upload successful");
    } else {
        console.log("Upload failed", error);
    }

};