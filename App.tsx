"use dom";
import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import * as Device from "expo-device";
const logo = require("./assets/logo/FullLogo_Transparent.png");
import { Card, ListItem, Button, Icon } from "@rneui/themed";
import { app, db } from "./firebaseConfig";

export default function App() {
  const [subscribed, setsubscribed] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const onSubscribe = () => {
    if (!emailRef.current) {
      return;
    }
    const email = emailRef.current.value;
    if (email != "" && email.includes("@"))
      setDoc(doc(db, "subscribe", email), {
        info: `${Device.deviceName ? Device.deviceName + ", " : ""}${
          Device.modelName
        }, ${Device.osName}`,
        timetamp: Timestamp.now(),
      })
        .then(() => {
          setsubscribed(true);
        })
        .catch((error) => {
          console.error("Firebase", error);
        });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 8 }}>
        <Image
          source={logo}
          style={{ flex: 1, width: "100%", backgroundColor: "#fff" }}
          resizeMode="center"
        />
      </View>
      <View style={{ flex: 2 }}>
        <form className="max-w-md mx-auto">
          {subscribed ? (
            <h1 className="text-5xl font-bold mb-8 animate-pulse">Thank you</h1>
          ) : (
            <div className="flex items-center">
              <input
                type="email"
                className="bg-gray-100 mr-3 py-2 px-4 w-full rounded-md focus:outline-none focus:bg-white"
                placeholder="Enter your email"
                ref={emailRef}
              />
              <button
                type="button"
                className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                onClick={onSubscribe}
              >
                Subscribe
              </button>
            </div>
          )}
        </form>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
