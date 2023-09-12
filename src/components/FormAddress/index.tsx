import { ContainerFormAnddres, InputContainer } from "./styles";

export default function FormAddres() {
    return(
        <ContainerFormAnddres>
            <h1>Meus Endereços</h1>

            <InputContainer>
            <label>Cep</label>
            <input></input>
            </InputContainer>

            <InputContainer>
            <label>Logradouro</label>
            <input></input>
            </InputContainer>

            <InputContainer>
            <label>Numero</label>
            <input></input>
            </InputContainer>

            <InputContainer>
            <label>Cidade</label>
            <input></input>
            </InputContainer>

            <InputContainer>
            <label>Estado</label>
            <input></input>
            </InputContainer>

            <div style={{display: 'flex', gap: '15px', justifyContent: 'space-between'}}>
                <button id="edit">Editar</button>
                <button id="save">Salvar</button>
            </div>


        </ContainerFormAnddres>
        
    )
}