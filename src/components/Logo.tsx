import ImageList from '@mui/material/ImageList';

type ImageData = {
  alt: string;
};

type LogoProps = {
  image: ImageData;
};

const Logo = ({ image }: LogoProps): JSX.Element => {
  return (
    <ImageList
      sx={{
        width: 150,
        height: 150,
        marginLeft: 2,
        marginTop: 2,
        marginBottom: 0,

      }}
      cols={1} 
    >
      <img src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw0ODczOTV8fGVufDB8fHx8fA%3D%3D" alt={image.alt} /> {/* Provide the relative path to your local image */}
    </ImageList>
  );
};

export default Logo;
