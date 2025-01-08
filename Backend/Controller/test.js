require('dotenv').config();


exports.testfonction = async (req, res) => {
    try {      
        const { data, error } = await supabase
            .from("TEST")
            .select('*');    
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        
        return res.json(data);
    } catch (err) {
        console.error("Erreur interne :", err.message);
        return res.status(500).json({ error: 'Erreur interne du serveur' });
    }
};

