import twttr from "twitter-text";
import ObjectAssign from "object-assign";

const join = (array, sep) => {
    const notEmpty = (string) => {
        return string.length > 0;
    };
    return array.filter(notEmpty).join(sep);
};

const defaults = {
    prefix: "",
    template: "%description% %title%",
    order: [
        "tags",
        "title",
        "quote",
        "description",
        "uri"
    ],
    mark: "..............." //yeah gonna need to unfuck this
};

function getLength(string){
    return twttr.getTweetLength(str, this.twitterTextOptions);
}

function joinContents(contents){
    let prefix = desc ? '' : this.prefix;
}

function extract(prefix, template, contents){
    contents.usage = {
        //this needs to do something
    };

    let fixed = template.replace( /%(desc|quote|title|url|tags|br)%/g, (match, name) => {
        if(name === 'br'){
            return 'n';
        }
        contents.usage[name] = true;
        return contents[name].length;
    }).trim().replace(/^ +| +$/mg, '').replace(/ +/g, ' ');
}

function truncate(content, oLength){
    let stringArray = [...content];
    let urls = twtter.extractUrlsWithIndicies(content).reverse();
    let twitterLength = this.getLength();

    if(!urls.length || twitterLength <= over + 1){
        return stringArray.slice(0, -(oLength + 1)).join('');
    }

    for(var i = 0; i < urls.length; i++){
        const indicies = urls[i].indicies;
        const start = indicies[0];
        const end = indicies[1];
        var len = stringArray.length;

        if(oLength < length - end){
            break;
        }

        stringArray = stringArray.slice(0, start - (length === end ? end : len));
        over -= twitterLength - this.getLength(stringArray.join(''));

        if(over < 0){
            break;
        }

        twitterLength = this.getLength(stringArray.join(''));
    }

    if(over >= 0){
        stringArray = stringArray.slice(0, -(over + 1));
    }
    return stringArray.join('');
}