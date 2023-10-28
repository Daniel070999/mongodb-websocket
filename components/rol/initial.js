const Role = require('./model');

const createRoleIfNotExists = async (roleName) => {
  try {
    const existingRole = await Role.findOne({ name: roleName });

    if (!existingRole) {
      const newRole = new Role({ name: roleName });
      await newRole.save();
      console.log(`Rol '${roleName}' creado con éxito.`);
    } else {
      console.log(`El rol '${roleName}' ya existe en la base de datos.`);
    }
  } catch (error) {
    console.error(`Error al crear o verificar el rol '${roleName}':`, error);
  }
};

const initializeRoles = async () => {
  await createRoleIfNotExists('administrador');
  await createRoleIfNotExists('usuario');
  console.log('Proceso de creación de roles finalizado.');
};

initializeRoles();
