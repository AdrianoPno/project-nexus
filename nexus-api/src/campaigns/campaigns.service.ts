import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './entities/campaign.entity';
import { CreateCampaignDto } from './dto/create-campaign.dto';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectRepository(Campaign)
    private readonly repository: Repository<Campaign>,
  ) {}

  create(createCampaignDto: CreateCampaignDto) {
    const campaign = this.repository.create(createCampaignDto);
    return this.repository.save(campaign);
  }

  async findByRegion(region: string) {
    const all = await this.repository.find({ where: { isActive: true } });
    // Retorna apenas campanhas que atendem a região do usuário
    return all.filter(c => c.availableRegions.includes(region.toUpperCase()));
  }

  findAll() {
    return this.repository.find();
  }
}