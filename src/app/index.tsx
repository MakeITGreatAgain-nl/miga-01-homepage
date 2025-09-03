"use dom";
import { app, db } from "@/firebaseConfig";
import { Link } from "expo-router";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import React, { useEffect, useState, useRef } from "react";
import { Text, View, Image, StyleSheet, ScrollView, Alert } from "react-native";
import * as Device from "expo-device";
const logo = require("../../assets/logo/FullLogo_Transparent.png");

export default function Home() {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Content />
      <Footer />
    </View>
  );
}

function Content() {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={logo} style={{ width: "100%" }} resizeMode="center" />
    </ScrollView>
  );
}

function Footer() {
  const emailRef = useRef(null);
  const [subscribed, setsubscribed] = useState(false);
  const onSubscribe = () => {
    const email = emailRef.current.value;
    if (email != "" && email.includes("@"))
      setDoc(doc(db, "subscribe", email), {
        info: `${Device.deviceName ? Device.deviceName + ", " : ""}${
          Device.modelName
        }, ${Device.osName}`,
        timetamp: Timestamp.now(),
      }).then(() => {
        setsubscribed(true);
      });
  };
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 50,
      }}
    >
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
