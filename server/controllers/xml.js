var parser = require('xml2json');
var parseString = require('xml2js').parseString;
const BioSample = require('../models').Sample


const clean_json = (result) => {
    const samples = []
    for (item of result.Submission.Action) {
        let attributes = {}
        let biosample = item.AddData[0].Data[0].XmlContent[0].BioSample[0]
        let attribute_field = biosample.Attributes[0].Attribute
        let organism_name = biosample.Organism[0].OrganismName[0]
        let descriptor = biosample.Descriptor[0].Title[0]
        let bioproject = biosample.BioProject[0].PrimaryId[0]['_']
        attribute_field.forEach((x) => {
            attributes[x['$']['attribute_name']] = x['_']
        })
        attributes.organism_name = organism_name
        attributes.descriptor = descriptor
        console.log(attributes, 'attrs')
        samples.push(attributes)
    }
    return samples
}

module.exports = {
    read(req, res) {
        parseString(req.body.xml, function (err, result) {
            const samples = clean_json(result)
            return BioSample.bulkCreate(samples)
                .then((objs) => {
                    res.status(200).send(objs)
                })
                .catch((err) => {
                    res.status(401).send(err)
                })

        });

    }
}