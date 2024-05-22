"use client"
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#012030',
            contrastText: '#efefef'
        },
        secondary: {
            main: '#45c4b0',
        },

        secondarySimple: {
            light: '#dbf833',
            main: '#9aeba33d',
            dark: '#99b40157',
            contrastText: '#011C31',
        },
        terciario: {
            main: '#DAFDBA',
            contrastText: '#012030'
        },
        terciarioglass: {
            main: '#9aeba32b',
        },
        grey: {
            main: '#99B1BF'
        },
        blanco:{
            main: '#efefef',
        }
    },
    typography: {
        h1: {
            lineHeight: 1.2,
            fontSize: 50,
            fontWeight: 600,
            color:'#012030'
        },
        h2: {
            lineHeight: 1.2,
            fontSize: 45,
            fontWeight: 600,
            color:'#012030'
        },
        h3: {
            lineHeight: 1.2,
            fontSize: 40,
            fontWeight: 600,
            color:'#012030'
        },
        h4: {
            lineHeight: 1.2,
            fontSize: 35,
            fontWeight: 600,
            color:'#012030'
        },
        h5: {
            lineHeight: 1.2,
            fontSize: 30,
            fontWeight: 600,
            color:'#012030',
        },
        h6: {
            lineHeight: 1.2,
            fontSize: 20,
            fontWeight: 600,
            color:'#012030'
        },
        h6Small: {
            lineHeight: 1.2,
            fontSize: 16,
            fontWeight: 600,
            color:'#012030'
        },
        h6p: {
            lineHeight: 1.2,
            fontSize: 14,
            fontWeight: 600,
            color:'#012030'
        },
        pBig: {
            fontSize: 20,
            color:'#012030'
        },
        pTitleGrey: {
            fontSize: 14,
            color: '#707070'
        },
        p: {
            fontSize: 20,
            color:'#012030'
        },
        span: {
            fontSize: 14,
            color:'#012030'
        },
        spanSmall: {
            fontSize: 12,
            color:'#012030'
        },
        fontFamily: "'Inter', sans-serif"
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'h5',
                    h6: 'h6',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    p: 'p',
                    body1: 'p',
                    span: 'span',
                }
            }
        },
        MuiFocused: {
            borderWidth: '1px'
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused fieldset': {
                        borderColor: '#808080',
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    // color: '#022946',
                    fontSize: 14
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    height: '0',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: '#022946',
                    fontSize: 14,
                    ':disabled': {
                        backgroundColor: '#00000013'
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    '::after': {
                        borderTop: 'thin solid #E6E6E8'
                    },
                    '::before': {
                        borderTop: 'thin solid #E6E6E8'
                    },
                }
            }
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 10
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: '35px',
                    display: 'flex',
                    justifyContent: 'center',
                    marginRight: '.5em'
                }
            }
        },
        MuiFormControlLabel: {
            label: {
                fontSize: 14
            }
        }

    },
    breakpoints: {
        values: {
            xs: 0,
            xm: 500,
            sm: 800,
            md: 1032,
            lg: 1200,
            xl: 1400,
        }
    }

});



export default theme;

