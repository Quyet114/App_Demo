import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, BackHandler } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getNewsDetail } from '../NewsHTTP'

const Detail = (props) => {
  const { navigation, route: { params: { id } } } = props;
  const [newsDetail, setNewsDetail] = useState({});
  const [bookmark, setBookmark] = useState(false);
  const [follow, setFollow] = useState(true);

  const changeBookmark = () => {
    setBookmark(!bookmark)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;
        const result = await getNewsDetail(id);
        setNewsDetail(result.data[0]);
      } catch (error) {
        console.log('>>>>>>fetch data:', error);
        throw error
      }
    }
    fetchData();
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, padding: 24 }}>
        <View style={styles.backContainer}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('Home')}
            onPress={() => navigation.goBack()}
          >
            <Image style={{ width: 24, height: 24 }}
              source={require('../../../media/pictures/back.png')} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 24, height: 24 }}
              source={require('../../../media/pictures/share.png')} />
            <Image style={{ width: 24, height: 24 }}
              source={require('../../../media/pictures/morever.png')} />
          </View>
        </View>
        <View style={styles.followingContainer}>
          <View style={styles.followingContent}>
            <View>
              <Image style={{ width: 50, height: 50, borderRadius: 50, marginEnd: 4 }}
                source={require('../../../media/pictures/bbcnews.png')} />
            </View>
            <View>
              <Text style={styles.fs16wf600lh24lsp012}>BBC News</Text>
              <Text style={styles.fs14wf400lh21lsp012}>14m ago</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => setFollow(!follow)}
            >
              {
                follow ? <Text style={[styles.fs16wf600lh24lsp012, styles.mautrang]}>Following</Text>
                  : <Text style={[styles.fs16wf600lh24lsp012, styles.follow]}>Follow</Text>
              }
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {
            newsDetail.image ? <View>
              <Image style={{ width: '100%', height: 248, marginTop: 16, borderRadius: 6 }}
                source={{ uri: newsDetail.image }} />
            </View>
              : null
          }
          <View style={{ marginTop: 16 }}>
            {/* <Text style={styles.fs14wf400lh21lsp012}>{newsDetail.title}</Text> */}
            <Text style={styles.titleContent}>{newsDetail.title}</Text>
            <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 24, letterSpacing: 0.12, color: '#4e4b66' }}>
              {newsDetail.content}
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.commentContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ marginEnd: 4 }}
            source={require('../../../media/pictures/heart.png')} />
          <Text style={styles.fs16wf400lh24lsp012}>24.5K</Text>
          <Image style={{ marginStart: 29, marginEnd: 4 }}
            source={require('../../../media/pictures/comment.png')} />
          <Text style={styles.fs16wf400lh24lsp012}>1K</Text>
        </View>
        <View>
          <TouchableOpacity
            // onPress={() => setBookmark(!bookmark)}
            onPress={changeBookmark}
          >
            <Image
              style={{ width: 24, height: 24 }}
              source={bookmark ? require('../../../media/pictures/bookmarkfocus.png')
                : require('../../../media/pictures/bookmark.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

export default Detail

const styles = StyleSheet.create({
  follow: {
    color: '#1877f2',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 6,
    width: 102,
    textAlign: 'center',
    borderColor: "#1877f2",
    borderWidth: 1
  },
  commentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    borderTopWidth: 0.2,
    borderColor: '#aaa',
    backgroundColor: '#fff'
  },
  titleContent: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 36,
    letterSpacing: 0.12,
    color: '#000',
    marginBottom: 16
  },
  mautrang: {
    color: '#fff',
    backgroundColor: '#1877f2',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 6,
    width: 102,
    textAlign: 'center',
    borderColor: "#1877f2",
    borderWidth: 1
  },
  followingButton: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  fs14wf400lh21lsp012: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4e4b66'
  },
  fs16wf400lh24lsp012: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#050505'
  },
  fs16wf600lh24lsp012: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000'
  },
  followingContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  followingContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
  }
})