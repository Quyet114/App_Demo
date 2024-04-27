import {
  StyleSheet, Text, View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { getNews } from '../NewsHTTP'
import { searchNews } from '../NewsHTTP'

const Bookmark = (props) => {
  const [news, setNews] = useState([]);
  const [keyword, setKeyWord] = useState('');

  const onSearch = async (text) => {
      try {
        const result = await searchNews(text);
        // console.log('>>>>>result', result);
        setNews(result.data)
      } catch (error) {
        console.log('>>>>>error', error);
        throw error;
      }

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNews();
        setNews(result.data);
      } catch (error) {
        console.log('>>>>>>get news log', error);
        throw error;
      }
    }
    fetchData();
  }, [])

  const renderItem = ({ item }) => {
    const { _id, title, content, image } = item;
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Detail', { id: _id })
        }
        key={_id}
        style={styles.itemData}>
        {
          item.image ? <View>
            <Image style={styles.imageData}
              source={{ uri: image }} />
          </View>
            : null
        }
        <View style={styles.contentData}>
          <View>
            <Text style={styles.categoryData} numberOfLines={1}>{title}</Text>
            <Text style={styles.titleData} numberOfLines={2}>{content}</Text>
          </View>
          <View style={styles.cardNewsContainer}>
            <View style={styles.cardNews}>
              <Image style={styles.bbcIcon} source={require('../../../media/pictures/bbcnews.png')} />
              <Text style={styles.bbcLabel}>BBC News</Text>
              <Image style={styles.timeIcon} source={require('../../../media/pictures/time.png')} />
              <Text style={styles.timeLabel}>4h ago</Text>
            </View>
            <View>
              <Image source={require('../../../media/pictures/3cham.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.bookmark}>Bookmark</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder='Search'
            onChangeText={(text) => {
              setKeyWord(text)
              onSearch(text)
            }} />
          <Image style={styles.searchIcon} source={require('../../../media/pictures/search.png')} />
          <Image style={styles.filterIcon} source={require('../../../media/pictures/filter.png')} />
        </View>
      </View>
      <View style={{ marginTop: 16 }}>
        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false} />
      </View>
    </View>
  )
}

export default Bookmark

const styles = StyleSheet.create({
  timeLabel: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    letterSpacing: 0.12,
    color: '#4e4b66',
    marginStart: 4
  },
  timeIcon: {
    width: 14,
    height: 14,
    marginStart: 12
  },
  bbcLabel: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 19.5,
    letterSpacing: 0.12,
    color: '#4e4b66',
    marginStart: 4
  },
  bbcIcon: {
    width: 20,
    height: 20
  },
  cardNews: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardNewsContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleData: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000'
  },
  categoryData: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    letterSpacing: 0.12,
    color: '#4e4b66'
  },
  contentData: {
    marginLeft: 4,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 4
  },
  imageData: {
    width: 96,
    height: 96,
    borderRadius: 6
  },
  itemData: {
    flexDirection: 'row',
    marginVertical: 8,
    padding: 8,
    justifyContent: 'flex-start'
  },
  filterIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  searchInput: {
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#4e4b66',
    paddingStart: 40,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#000'
  },
  searchInputContainer: {
    position: 'relative'
  },
  searchContainer: {
    marginTop: 16
  },
  bookmark: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 48,
    letterSpacing: 0.12,
    color: '#000'
  },
  cl000: {
    color: '#000'
  },
  cl4e4b66: {
    color: '#4e4b66'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24
  }
})