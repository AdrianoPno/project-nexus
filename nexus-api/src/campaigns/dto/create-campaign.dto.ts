import { IsArray, IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsString({ each: true })
  availableRegions: string[];

  @IsBoolean()
  isActive: boolean;
}
