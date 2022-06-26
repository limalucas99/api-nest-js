import { CoursesService } from './courses.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {
    // é readonly porque não precisa nunca ser redefinido e private porque só sera utilizado internamente pela própria classe
  }
  @Get() // Mesma coisa que colocar /list - É possível observar o mapeamento das rotas nos logs do Nest
  findAll() {
    return this.coursesService.findAll();
  }

  // @Get('/:id')
  // findOne(@Param() params) { // pega a lista de parâmetros inteira
  //   return `Curso #${params.id}`;
  // }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    // @Param('id') define que somente o parâmetro id será pego
    return this.coursesService.findOne(id);
  }

  // @Post()
  // create(@Body('name') name: string) { // Pega somente o atributo name pelo body
  //   return name;
  // }

  @Post()
  // @HttpCode(HttpStatus.NO_CONTENT) // Define qual é o status de resposta
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    console.log(updateCourseDto);
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    // @Param('id') define que somente o parâmetro id será pego
    return this.coursesService.remove(id);
  }
}
