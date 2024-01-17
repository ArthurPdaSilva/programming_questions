import theme from '../theme';

export const useTheme = () => {
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  return {
    primaryColor,
    secondaryColor,
  };
};
