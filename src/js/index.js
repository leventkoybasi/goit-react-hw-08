const avatars = [import.meta.glob('/src/assets/avatar/*.jpeg', { eager: true })];

export default Object.values(avatars[0]).map((img) => img.default);
