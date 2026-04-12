import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Post()
  create(@Body() createCampaignDto: CreateCampaignDto) {
    return this.campaignsService.create(createCampaignDto);
  }

  @Get()
  findAll(@Query('region') region?: string) {
    if (region) {
      return this.campaignsService.findByRegion(region);
    }
    return this.campaignsService.findAll();
  }
}