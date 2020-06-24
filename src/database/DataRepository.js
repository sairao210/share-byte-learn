import {db} from './FirebaseDB'

const linksPath = "links"

export const pushLink = function (source, description) {
    db.ref(linksPath).push({
       "source": source,
       "description": description,
    });
}

export const linksRef = db.ref(linksPath)