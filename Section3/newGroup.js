const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/group', (req, res) => {
  const { groupName, admin } = req.body;

  const missingFields = [];
  if (!groupName) missingFields.push("'groupName'");
  if (!admin) {
    missingFields.push("'admin'");
  } else {
    if (!admin.name) missingFields.push("'admin.name'");
    if (!admin.email) missingFields.push("'admin.email'");
  }

  if (missingFields.length > 0) {
    return res.status(400).json({
      error: `Missing required fields: ${missingFields.join(', ')}`
    });
  }

  try {
    const groupId = `${Math.floor(Math.random() * 10000)}`;
    const createdAt = new Date().toISOString();

    const responseBody = {
      groupId,
      groupName,
      admin: {
        name: admin.name,
        email: admin.email
      },
      createdAt
    };

    return res.status(201).json(responseBody);
  } catch (error) {
    console.error(`Server error: ${error.message}`);
    return res.status(500).json({
      error: "An unexpected error occurred. Please try again later."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
