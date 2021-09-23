export interface Bicycle {
    _id?: String;
    bicycleId?: String;
    color?: String;
    // color: ('Blanco' | 'Negro' | 'Rojo' | 'Verde')[];
    // model: ('Ruta' | 'Cross' | 'Montian' | 'Turismo')[];
    model?: String;
    latitude?: Number;
    longitude?: Number;
}