import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Table } from './entities/table.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Table])],
  providers: [TablesService],
  controllers: [TablesController],
})
export class TablesModule {}
