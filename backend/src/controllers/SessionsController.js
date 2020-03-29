const connection = require('../db/connection')

const create = async (request, response) => {
    const { id } = request.body

    const ong = await connection('ong')
        .where('id', id)
        .select('name')
        .first()

    if (!ong)
        return response.status(400)
            .json({ error: 'No ONG found with this ID' })

    return response.json({ ong })
}

module.exports = { create }