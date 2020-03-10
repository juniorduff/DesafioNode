import Sequelize, { Model } from 'sequelize';

class Couriers extends Model {
  static init(sequelize) {
    // INFORMO OS CAMPOS QUE USUARIO VAI PREENCHER..
    // SE MANDAR ALGUM CAMPO ADICIONAL ELE NÃO VAI SER CONSIDERADO ENVIARÁ SOMENTE ESTES CAMPOS
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Couriers;
