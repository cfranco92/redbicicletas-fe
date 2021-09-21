import { Bicycle } from "../models/bicycle.model";

export class BicycleFactory {
    static toModel(dto: any): any {
        return {
            name: dto.name,
            id: dto._id,
            bicycleId: dto.bicycleId,
            color: dto.color,
            model: dto.model,
            latitude: dto.latitude,
            longitude: dto.longitude
        }
    }
}