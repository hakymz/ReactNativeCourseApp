import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import courses from '../../const/courses';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default HomeScreen;
const HomeScreen = ({navigation}) => {
  const CourseCard = ({course}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('CourseScreen', {data: course})}>
        <ImageBackground
          source={course.image}
          style={{
            marginVertical: 10,
            marginHorizontal: 5,
            borderRadius: 50,
            width: windowWidth / 2 - 30,
            height: windowHeight / 3,
            paddingTop: 25,
            paddingLeft: 20,
            borderRadius: 15,
            overflow: 'hidden',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              paddingBottom: 5,
            }}>
            {course.name}
          </Text>
          <Text style={{color: '#8F95B2', fontWeight: '600'}}>
            {course.totalCourse + ' Courses'}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Hey Alex,</Text>
        <Text style={{fontSize: 22, color: '#61688B', marginTop: 15}}>
          Find a course you want to learn
        </Text>
        <View
          style={{
            height: 60,
            marginTop: 35,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            backgroundColor: '#F5F5F7',
            borderRadius: 30,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon size={30} name="search" />
          <TextInput
            style={{fontSize: 18, marginLeft: 5}}
            placeholder="Search for anything"
          />
        </View>
        <View
          style={{
            paddingVertical: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Categories</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#6E8AFA'}}>
            See All
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={courses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <CourseCard course={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
