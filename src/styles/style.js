import styled from "styled-components";

export const Styled = styled.div`
        font-family: roboto;
        background-image: url("https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649292584/ToDo/bg-desktop-light_yisfbx.jpg");
        background-repeat: no-repeat;

    .cont{
        width: 550px;
        margin: 0% 370px 0 440px;
        padding-top: 4%;
    }
    .header{
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .h1Header{
        letter-spacing: 10px;
    }
    .btnHeader{
        background: transparent;
        border: none;
    }



    .newTask{
        margin: 30px 0;
        height: 50px;
        border: none;
        border-radius: 5px;
        width: 98%;
    }



    .contTask{
        border-radius: 5px;
        width: 98%;
        border: none;
        background-color: navy;
    }
    .task{
        height:50px;
        display: flex;
        align-items: center;
        border: none;
        border-bottom: solid 1px;
    }
    .inputTask{
        margin: 0 15px;
        width: 25px;
        height: 25px;
    }
    .pTask{
        margin: 0;
    }
    .resume{
        height: 50px;
        margin: 0 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
    }
    .btnFilter{
        font-family: roboto;
        /* width: 80px; */
        border: none;
        background-color: transparent;
    }
    .btnClear{
        font-family: roboto;
        border: none;
        background-color: transparent;
    }
`