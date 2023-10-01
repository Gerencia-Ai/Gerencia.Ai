import {
  Text,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { login } from "../../services/login";
import { saveItem } from "../../plugins/SecureStorage/secureStorageHandler.js";
import { isValidEmail } from "../../services/validators/emailValidator";

export default function App({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "",
      Password: "",
    },
  });

  const handleEmailValidation = (email) => {
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

  const onSubmit = async (data) => {
    setLoading(true);
    let status = await login(data.Email, data.Password);
    if (status) {
      await saveItem("token", status.access);
      setLoading(false);
    }
    console.log(status);
    setError(true);
  };

  return (
    <View className="flex-1 items-center justify-center bg-main px-3">
      <View className="lg:h-2/3  w-full bg-secondary rounded-lg overflow-hidden border border-stroke shadow-xl shadow-shadow"></View>
      <View className="h-32  bg-highlight flex justify-center p-2 w-full">
        <Text className="text-4xl text-secondary">Login</Text>
      </View>

      {error && (
        <View className="text-red-400">
          <Text>Email ou senha incorretos.</Text>
        </View>
      )}
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
        {errors.Email && (
          <Text className="text-red-400">
            Por favor insira um e-mail válido.
          </Text>
        )}
      </View>

      <View className="lg:h-1/2 p-2">
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
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
          name="Password"
        />
      </View>
      {loading && (
        <View className="text-secondary">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      <Pressable
        className="bg-highlight rounded-md mt-8 p-3 w-full"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-secondary">Entrar</Text>
      </Pressable>
    </View>
  );
}
