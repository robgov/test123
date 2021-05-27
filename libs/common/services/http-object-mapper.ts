export class HttpObjectMapper {
	public static mapObjectToServer<TOutput>(entity: TOutput): TOutput {
		if (!entity) return entity;

		const objectKeys = Object.keys(entity) as Array<string>;

		for (const key of objectKeys) {
			const value = entity[key];

			entity = this.handleToServerCustomTypeMapping(entity, key, value);

			if (typeof value === 'object' && value !== null) {
				this.mapObjectToServer.call(this, value);
			}
		}
		return entity;
	}

	public static handleToServerCustomTypeMapping<TOutput>(entity: TOutput, fieldName: string, fieldValue: any): TOutput {
		const copiedUnfrozenObject = Object.assign({}, entity);

		/* eslint-disable no-underscore-dangle */
		if (fieldName.endsWith('Date') || fieldName.endsWith('DateTime')) {
			// TODO: ask Grant about this?
			if (fieldValue && fieldValue._d) {
				const utcDate = fieldValue._d.toISOString();
				copiedUnfrozenObject[fieldName] = new Date(utcDate);
			}
		}
		/* eslint-enable no-underscore-dangle */

		return copiedUnfrozenObject;
	}
}
