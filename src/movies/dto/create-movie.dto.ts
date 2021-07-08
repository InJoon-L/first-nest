import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto {

    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    // IsOptional 값이 empty라도 유효성검사를 무시하게 함
    // each:true 각 요소를 하나씩 유효성 검사를 진행
    @IsOptional()
    @IsString({ each:true })
    readonly geners: string[];
}