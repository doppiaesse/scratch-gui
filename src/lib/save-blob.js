import { supabase } from './supa';
import 'regenerator-runtime/runtime';

export default async function (filename, blob) {
    
    var params = (new URL(document.location)).searchParams;
    var id = params.get("id");
    var es = params.get("es");

    const { data, error } = await supabase
        .storage
        .from('progetti/Scratch/' + id)
        .upload(es + '.sb3', blob, {
        cacheControl: '3600',
        upsert: true
      });

    if (data) {
        console.log("Upload successful");
    } else {
        console.log("Upload failed", error);
    }

};