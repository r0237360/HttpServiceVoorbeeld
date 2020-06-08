export interface FieldAliases {
    id: string;
    thema: string;
    type: string;
    subtype: string;
    naam: string;
    straatnaam: string;
    postcode: string;
    district: string;
    publiek_detail: string;
    bereik: string;
    grond_opp: string;
    opp_ha: string;
    lgst_niv: string;
    hgst_niv: string;
    x_coord: string;
    y_coord: string;
    ligging: string;
    bezoekersaantal: string;
    algemeen_uitzicht: string;
    netheid: string;
    hoogte_afsluiting: string;
    materiaal_afsluiting: string;
    aantal_vuilnisbakken: string;
    aantal_zitbanken: string;
    verlichting: string;
    andere_objecten: string;
    type_ondergrond: string;
    quotering_algemeen: string;
    OBJECTID: string;
}

export interface SpatialReference {
    wkid: number;
    latestWkid: number;
}

export interface Field {
    name: string;
    type: string;
    alias: string;
    length: number;
}

export interface Attributes {
    id: string;
    thema: string;
    type: string;
    subtype: string;
    naam: string;
    straatnaam: string;
    postcode: string;
    district: string;
    publiek_detail: string;
    bereik?: any;
    grond_opp: number;
    opp_ha: number;
    lgst_niv: string;
    hgst_niv: string;
    x_coord?: number;
    y_coord?: number;
    ligging: string;
    bezoekersaantal: string;
    algemeen_uitzicht: string;
    netheid: string;
    hoogte_afsluiting: string;
    materiaal_afsluiting: string;
    aantal_vuilnisbakken?: number;
    aantal_zitbanken?: number;
    verlichting: string;
    andere_objecten: string;
    type_ondergrond: string;
    quotering_algemeen: string;
    OBJECTID: number;
}

export interface Geometry {
    x: number;
    y: number;
}

export interface Feature {
    attributes: Attributes;
    geometry: Geometry;
}

export interface RootObject {
    displayFieldName: string;
    fieldAliases: FieldAliases;
    geometryType: string;
    spatialReference: SpatialReference;
    fields: Field[];
    features: Feature[];
}