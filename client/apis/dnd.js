import request from 'superagent'

export const getNav = () => { return request.get('https://www.dnd5eapi.co/api').then(response => { return response.body }) }
export const getCategory = (link) => { return request.get(`https://www.dnd5eapi.co/api/${link}`).then(response => { return response.body.results }) }

// export const getAbilityScores       = () => { return request.get('/ability-scores'      ).then(response => { return response.body })}
// export const getAlignments          = () => { return request.get('/alignments'          ).then(response => { return response.body })}
// export const getBackgrounds         = () => { return request.get('/backgrounds'         ).then(response => { return response.body })}
// export const getClasses             = () => { return request.get('/classes'             ).then(response => { return response.body })}
// export const getConditions          = () => { return request.get('/conditions'          ).then(response => { return response.body })}
// export const getDamageTypes         = () => { return request.get('/damage-types'        ).then(response => { return response.body })}
// export const getEquipmentCategories = () => { return request.get('/equipment-categories').then(response => { return response.body })}
// export const getEquipment           = () => { return request.get('/equipment'           ).then(response => { return response.body })}
// export const getFeats               = () => { return request.get('/feats'               ).then(response => { return response.body })}
// export const getFeatures            = () => { return request.get('/features'            ).then(response => { return response.body })}
// export const getLanguages           = () => { return request.get('/languages'           ).then(response => { return response.body })}
// export const getMagicItems          = () => { return request.get('/magic-items'         ).then(response => { return response.body })}
// export const getMagicSchools        = () => { return request.get('/magic-schools'       ).then(response => { return response.body })}
// export const getMonsters            = () => { return request.get('/monsters'            ).then(response => { return response.body })}
// export const getProficiencies       = () => { return request.get('/proficiencies'       ).then(response => { return response.body })}
// export const getRaces               = () => { return request.get('/races'               ).then(response => { return response.body })}
// export const getRules               = () => { return request.get('/rules'               ).then(response => { return response.body })}
// export const getRuleSections        = () => { return request.get('/rule-sections'       ).then(response => { return response.body })}
// export const getSkills              = () => { return request.get('/skills'              ).then(response => { return response.body })}
// export const getSpells              = () => { return request.get('/spells'              ).then(response => { return response.body })}
// export const getSubclasses          = () => { return request.get('/subclasses'          ).then(response => { return response.body })}
// export const getSubraces            = () => { return request.get('/subraces'            ).then(response => { return response.body })}
// export const getTraits              = () => { return request.get('/traits'              ).then(response => { return response.body })}
// export const getWeaponProperties    = () => { return request.get('/weapon-properties'   ).then(response => { return response.body })}
