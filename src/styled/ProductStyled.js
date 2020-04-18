import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  padding-bottom: 40px;
  justify-content: flex-start;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

const Image = styled.span`
  height: 100px;
  width: 130px;
  background-image: url('${({ url }) => url}');
`;

const Counter = styled.div`
  display: flex;
  padding-bottom: 12px;
  font-family: Arial,serif;
`;

const Title = styled.a`
  font-size: 16px ;
  font-family: Arial,serif;
  padding-bottom: 5px;
  color: #6388c8;
  font-weight: bold;
  width: fit-content;
  text-decoration: none;
  opacity: 0.9;
   &:hover{
  cursor: pointer;
  transition: color 0.25s ease-in-out;
  color: #1551fb;
`;

const Details = styled.div`
  font-size: 16px;
  font-family: Arial,serif;
  margin-bottom: 12px;
`;

const Submitted = styled.div`
  font-size: 16px;
  font-family: Arial,serif;
  color: #7f7f7f;
  letter-spacing: 0.6px;
`;

const Submitter = styled.div`
  height: 30px;
  width: 30px;
  background-image: url('${({ url }) => url}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50px;
  margin-left: 5px;
`;

const SubmitInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 0; 
  height: 10px; 
  border-right: 10px solid transparent;
  border-left: 10px solid transparent; 
  border-bottom:10px solid #6a9afb; 
  margin-right: 8px;
  &:hover{
  cursor: pointer;
  border-bottom:10px solid #3e4ffb; 
 -webkit-filter: drop-shadow(2px 2px 2px rgba(0,0,0,.5));
  filter: drop-shadow(2px 2px 2px rgba(0,0,0,.5));
  transition: color 0.25s ease-in-out;
    }
`;

const Votes = styled.div`
  font-size: 20px;
  font-family: Arial,serif;
`;

export default {
  ProductContainer,
  ProductDetails,
  Image,
  Counter,
  Title,
  Details,
  Submitted,
  Submitter,
  SubmitInfo,
  Votes,
  Icon
}
