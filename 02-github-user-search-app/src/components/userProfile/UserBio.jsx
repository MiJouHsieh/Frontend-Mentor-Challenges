import styled from "styled-components";
const UserBioText = styled.p`
  border: 1px solid blue;
  margin-bottom: 23px;
  font-size: 13px;
`;

export default function UserBio() {
  return (
    <UserBioText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore optio,
      fugiat ducimus ipsam suscipit dolorem at animi, omnis veritatis incidunt
      exercitationem!
    </UserBioText>
  );
}
