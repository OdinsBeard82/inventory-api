async function createCategory(req, res) {
    try {
        const { name } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({ error: "Name is required" });
        }

        const category = await Category.create({ name: name.trim() });

        res.status(201).json({ message: "Category created", category });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create category" });
    }
}