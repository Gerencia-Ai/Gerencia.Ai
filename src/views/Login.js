import { Text, View, TextInput, Button, Alert, Pressable, ActivityIndicator } from "react-native";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userToken } from "../store/atoms";

const isValidEmail = email =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );


export default function App({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            Email: '',
            Senha: ''
        }
    });

    const [token, setToken] = useRecoilState(userToken);

    const handleEmailValidation = email => {
        console.log("ValidateEmail was called with", email);

        const isValid = isValidEmail(email);

        const validityChanged =
            (errors.Email && isValid) || (!errors.Email && !isValid);
        if (validityChanged) {
            console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
        }

        return isValid;
    };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // make login logic at this function
    // need's to be async, and to store the user data
    const onSubmit = async data => {
        console.log(data)
        setLoading(true)
        axios.post('https://gerenciaback-iy0h-dev.fl0.io/token/',
            {
                "email": data.Email,
                "password": data.Senha
            }).then((response) => {
                console.log(response.data)
                setLoading(false)
                setToken(response.data.access)
                navigation.navigate('Projetos')
            }).catch((error) => {
                console.log(error);
                setError(true);
                setLoading(false)
            })

    };

    return (
        <View className="flex-1 items-center justify-center bg-main px-3">
            <View className="lg:h-2/3  w-full bg-secondary rounded-lg overflow-hidden border border-stroke shadow-xl shadow-shadow"></View>
            <View className="h-32  bg-highlight flex justify-center p-2 w-full">
                <Text className="text-4xl text-secondary">Login</Text>
            </View>

            {error && <View className="text-red-400"><Text>Email ou senha incorretos.</Text></View>}
            <View className="lg:h-1/2 p-2">
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        // needs to be email
                        validate: handleEmailValidation,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Email"
                            onBlur={onBlur}
                            className="my-2 border border-stroke rounded-md px-2"
                            style={{
                                width: 350,
                                height: 40, // Set the height as needed
                            }}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="Email"
                />
                {errors.Email && <Text className="text-red-400">Por favor insira um e-mail válido.</Text>}
            </View>

            <View className="lg:h-1/2 p-2">
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Senha"
                            secureTextEntry={true}
                            onBlur={onBlur}
                            className="my-2 border border-stroke rounded-md px-2"
                            style={{
                                width: 350,
                                height: 40, // Set the height as needed
                            }}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="Senha"
                />
            </View>
            {loading && <View className="text-secondary"><ActivityIndicator size="large" color="#0000ff" /></View>}


            <Pressable
                className="bg-highlight rounded-md mt-8 p-3 w-full"
                onPress={handleSubmit(onSubmit)}
            >
                <Text className="text-secondary">Entrar</Text>
            </Pressable>


        </View>
    );
}
