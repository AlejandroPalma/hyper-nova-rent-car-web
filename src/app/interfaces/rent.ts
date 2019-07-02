export interface Rent {
    rentId?: string;
    userId: string;
    carId: string;
    retirementPlace: number; // Lugar de Retiro
    retirementHour: string; // Hora de Retiro
    sameRetirementPlace: boolean; // Mismo lugar de Retiro
    returnPlace: number;  // Lugar de Devolucion
    returnHour: string; // Hora de  Devolucion
}
