export default defineEventHandler(async (event) => {
    const { page, perPage } = getQuery(event);
    return {};
});
