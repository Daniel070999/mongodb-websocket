const Role = require('./model'); 

const initializeRoles = async () => {
  try {
    const userRole = new Role({ name: 'user' });
    const moderatorRole = new Role({ name: 'moderator' });
    const adminRole = new Role({ name: 'admin' });

    await Promise.all([userRole.save(), moderatorRole.save(), adminRole.save()]);
    console.log('Roles creados con éxito.');
  } catch (error) {
    console.error('Error al crear roles:', error);
  }
};

initializeRoles();
