import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    // INFORMO OS CAMPOS QUE USUARIO VAI PREENCHER..
    // SE MANDAR ALGUM CAMPO ADICIONAL ELE NÃO VAI SER CONSIDERADO ENVIARÁ SOMENTE ESTES CAMPOS
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // SO EXISTE AQUI. NÃO EXISTE NA BASE DE DADOS
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async user => {
      // ANTES DE SALVAR QUALQUER USUARIO
      // EXECUTA A FUNÇÃO A BAIXO
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
export default User;
