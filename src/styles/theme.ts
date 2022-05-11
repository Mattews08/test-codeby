import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps} from '@chakra-ui/theme-tools'

const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            bg: mode('#FFFFFF', '#202023')(props),
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: ({
            color: mode('#3d7aed', '#ff63c3'),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    Heading: 'Poppins',
    body: 'Poppins'
}

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

export const theme = extendTheme({
    config, styles, components, colors, fonts
})