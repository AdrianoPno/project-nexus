import { DataSource } from 'typeorm';
import { Campaign } from '../campaigns/entities/campaign.entity';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [Campaign],
  migrations: ['./src/migrations/*.ts'], // O TypeORM lê as migrations da pasta dist após o build
  synchronize: false, // OBRIGATÓRIO: false para usar migrations
});
