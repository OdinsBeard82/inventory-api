const db = require('./models');

async function test() {
  try {
    await db.sequelize.authenticate();
    console.log('✅ Database connection OK');

    const user = await db.User.create({
      username: 'testuser2',
      password: 'mypassword123'
    });

    console.log('✅ User created:', user.toJSON());
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await db.sequelize.close();
  }
}

test();