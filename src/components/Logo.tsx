
import CardMedia from '@mui/material/CardMedia';

type ImageData = {
  alt: string;
};

type LogoProps = {
  image: ImageData;
};

const Logo = ({ image }: LogoProps): JSX.Element => {
  return (
    <CardMedia
    component="img"
    height="250"
    width="70"
    image="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0ODczOTV8fGVufDB8fHx8fA%3D%3D"
    alt="Logo"
    >
    </CardMedia>
  );
};

export default Logo;
