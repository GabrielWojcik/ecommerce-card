import React, { useState } from 'react';
import CardItens from "@/src/components/card-itens";
import Banner from "../src/components/banner";
import { HomeContainer, MainContainer, Title} from "../styles/home/styles";
import Chips from "@/src/components/chips";
import Brands from "@/src/components/brands";
import SingleInputDateRangePicker from '@/src/components/InputRangeDate'

export default function Home() {

    return(
        <HomeContainer>
            <Banner />
            <Title>
                <h1 className="text-3xl text-center">
                    Nossos Produtos
                </h1>
                <SingleInputDateRangePicker />
            </Title>
            <MainContainer>
                <CardItens />
            </MainContainer>
            <div className="flex flex-col justify-center items-center md:flex-row p-4 gap-5">
                <Chips />
            </div>
            <div className="flex justify-center items-center">
                <Brands />
            </div>

        </HomeContainer>
    )
}
