import React from 'react'
import { Box, Image, Heading, Tag } from '@chakra-ui/react'
import { Props } from '../../types/PokemonCardProps'
import { stringFunctions as SF } from '../../utils/stringFunctions'
import { pokemonTypeColor } from '../../utils/getTypeColor'

const PokemonList: React.FC<Props> = ({ data }) => {
  return (
        <Box
            boxShadow='0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%)'
            height='300px'
            borderRadius='4px'
            width='300px'
            display='grid'
            placeItems='center'
        >
            <Image
                src={data.sprites.front_default}
                alt={data.name}
                height='96px'
                width='96px'
            />
            <div>
                <Heading
                    size='xs'
                    textAlign='center'
                    color='#636e72'
                >
                    NAME
                </Heading>
                <Heading
                    size='md'
                >

                    {SF.capitalizeFirstLetter(data.name)}
                </Heading>
            </div>
            <div>
                <Heading
                    size='xs'
                    textAlign='center'
                    color='#636e72'
                >
                    TYPE
                </Heading>
                <Heading
                    size='sm'
                    display='grid'
                    gridAutoFlow='column'
                    placeItems='center'
                    gridGap='1em'
                >
                    <Tag
                        backgroundColor={pokemonTypeColor(data.types[0].type.name)}
                    >
                        {SF.toUpperCase(data.types[0].type.name)}
                    </Tag>
                    <Tag
                        backgroundColor={pokemonTypeColor(data.types[1]?.type.name)}
                    >
                        {SF.toUpperCase(data.types[1]?.type?.name ?? 'NULL')}
                    </Tag>
                </Heading>
            </div>
        </Box>
  )
}

export default PokemonList
