!function(){function n(){return Array.prototype.slice.call(document.querySelectorAll.apply(document,arguments))}if(n(".columns .column-right").length&&n(".columns .column-right-shadow").length&&!n(".columns .column-right-shadow")[0].children.length)for(const o of n(".columns .column-right")[0].children)n(".columns .column-right-shadow")[0].append(o.cloneNode(!0))}();!function(){function a(){return Array.prototype.slice.call(document.querySelectorAll.apply(document,arguments))}a("body > .navbar, body > .section, body > .footer").forEach(t=>{t.style.transition="0s",t.style.opacity="0"}),document.querySelector("body > .navbar").style.transform="translateY(-100px)",[".column-main > .card, .column-main > .pagination, .column-main > .post-navigation",".column-left > .card, .column-right-shadow > .card",".column-right > .card"].forEach(t=>{a(t).forEach(t=>{t.style.transition="0s",t.style.opacity="0",t.style.transform="scale(0.8)",t.style.transformOrigin="center top"})}),setTimeout(()=>{a("body > .navbar, body > .section, body > .footer").forEach(t=>{t.style.opacity="1",t.style.transition="opacity 0.3s ease-out, transform 0.3s ease-out"}),document.querySelector("body > .navbar").style.transform="translateY(0)",[".column-main > .card, .column-main > .pagination, .column-main > .post-navigation",".column-left > .card, .column-right-shadow > .card",".column-right > .card"].forEach(t=>{let o=1;a(t).forEach(t=>{setTimeout(()=>{t.style.opacity="1",t.style.transform="",t.style.transition="opacity 0.3s ease-out, transform 0.3s ease-out"},100*o),o++})})})}();$(document).ready(()=>{const n=$("#back-to-top"),i=$("footer.footer"),l=$(".column-main"),e=$(".column-left"),a=$(".column-right");let c=0;let d=null;const r={base:{classname:"card has-text-centered",left:"",width:64,bottom:20}};function h(e){if(null===d||(t=d,o=e,[].concat(Object.keys(t),Object.keys(o)).some(e=>!Object.prototype.hasOwnProperty.call(t,e)||!Object.prototype.hasOwnProperty.call(o,e)||o[e]!==t[e]))){var t,o;n.attr("class",e.classname);for(const s in e)"classname"!==s&&n.css(s,e[s]);d=e}}function p(){return 1078<=window.innerWidth}function b(){return 0<a.length}function m(){return $(window).scrollTop()+$(window).height()}function w(){return n.outerHeight(!0)}function t(){if(p()||768<=window.innerWidth&&!p()&&!(0<e.length)&&b()){let e;var t=(l.outerWidth()-l.width())/2,o=$(window).width()-n.outerWidth(!0)-20,s=i.offset().top+w()/2+20;e=0===$(window).scrollTop()||m()<(b()?Math.max.apply(null,a.find(".widget").map(function(){return $(this).offset().top+$(this).outerHeight(!0)})):0)+t+w()?r["desktop-hidden"]:m()<s?r["desktop-visible"]:Object.assign({},r["desktop-dock"],{bottom:m()-s+20});t=l.offset().left+l.outerWidth()+t;e=Object.assign({},e,{left:Math.min(t,o)}),h(e)}else $(window).scrollTop()<c&&0<$(window).scrollTop()?h(r["mobile-visible"]):h(r["mobile-hidden"]),c=$(window).scrollTop()}r["desktop-hidden"]=Object.assign({},r.base,{classname:r.base.classname+" rise-up"}),r["desktop-visible"]=Object.assign({},r["desktop-hidden"],{classname:r["desktop-hidden"].classname+" fade-in"}),r["desktop-dock"]=Object.assign({},r["desktop-visible"],{classname:r["desktop-visible"].classname+" fade-in is-rounded",width:40}),r["mobile-hidden"]=Object.assign({},r.base,{classname:r.base.classname+" fade-in",right:20}),r["mobile-visible"]=Object.assign({},r["mobile-hidden"],{classname:r["mobile-hidden"].classname+" rise-up"}),t(),$(window).resize(t),$(window).scroll(t),$("#back-to-top").on("click",()=>{CSS&&CSS.supports&&CSS.supports("(scroll-behavior: smooth)")?window.scroll({top:0,behavior:"smooth"}):$("body, html").animate({scrollTop:0},400)})});!function(a,i,t,e){function n(){var i=a(".navbar-main .navbar-start").outerWidth()+a(".navbar-main .navbar-end").outerWidth();a(document).outerWidth()<i?a(".navbar-main .navbar-menu").addClass("justify-content-start"):a(".navbar-main .navbar-menu").removeClass("justify-content-start")}function l(i,t){const e=a(i).find(".fold i");t?a(i).addClass("folded"):a(i).removeClass("folded"),t?e.removeClass("fa-angle-down"):e.removeClass("fa-angle-right"),t?e.addClass("fa-angle-right"):e.addClass("fa-angle-down")}function s(i){return'<span class="fold">'+("unfolded"===i?'<i class="fas fa-angle-down"></i>':'<i class="fas fa-angle-right"></i>')+"</span>"}if(a('.article img:not(".not-gallery-item")').each(function(){0===a(this).parent("a").length&&(a(this).wrap('<a class="gallery-item" href="'+a(this).attr("src")+'"></a>'),this.alt&&a(this).after('<p class="has-text-centered is-size-6 caption">'+this.alt+"</p>"))}),"function"==typeof a.fn.lightGallery&&a(".article").lightGallery({selector:".gallery-item"}),"function"==typeof a.fn.justifiedGallery&&(a(".justified-gallery > p > .gallery-item").length&&a(".justified-gallery > p > .gallery-item").unwrap(),a(".justified-gallery").justifiedGallery()),"function"==typeof i&&a(".article-meta time").each(function(){a(this).text(i(a(this).attr("datetime")).fromNow())}),a(".article > .content > table").each(function(){a(this).width()>a(this).parent().width()&&a(this).wrap('<div class="table-overflow"></div>')}),n(),a(window).resize(n),a("figure.highlight table").wrap('<div class="highlight-body">'),void 0!==e&&void 0!==e.article&&void 0!==e.article.highlight){a("figure.highlight").addClass("hljs"),a("figure.highlight .code .line span").each(function(){var i=a(this).attr("class").split(/\s+/);1===i.length&&(a(this).addClass("hljs-"+i[0]),a(this).removeClass(i[0]))});const f=e.article.highlight.clipboard,h=e.article.highlight.fold.trim();a("figure.highlight").each(function(){a(this).find("figcaption").length?(a(this).find("figcaption").addClass("level is-mobile"),a(this).find("figcaption").append('<div class="level-left">'),a(this).find("figcaption").append('<div class="level-right">'),a(this).find("figcaption div.level-left").append(a(this).find("figcaption").find("span")),a(this).find("figcaption div.level-right").append(a(this).find("figcaption").find("a"))):(f||h)&&a(this).prepend('<figcaption class="level is-mobile"><div class="level-left"></div><div class="level-right"></div></figcaption>')}),void 0!==t&&f&&(a("figure.highlight").each(function(){var i="code-"+Date.now()+(1e3*Math.random()|0),t='<a href="javascript:;" class="copy" title="Copy" data-clipboard-target="#'+i+' .code"><i class="fas fa-copy"></i></a>';a(this).attr("id",i),a(this).find("figcaption div.level-right").append(t)}),new t(".highlight .copy")),h&&(a("figure.highlight").each(function(){if(0<a(this).find("figcaption").find("span").length){const i=a(this).find("figcaption").find("span");if(-1<i[0].innerText.indexOf(">folded"))return i[0].innerText=i[0].innerText.replace(">folded",""),a(this).find("figcaption div.level-left").prepend(s("folded")),void l(this,!0)}a(this).find("figcaption div.level-left").prepend(s(h)),l(this,"folded"===h)}),a("figure.highlight figcaption .fold").click(function(){const i=a(this).closest("figure.highlight");l(i.eq(0),!i.hasClass("folded"))}))}const d=a("#toc");if(0<d.length){const c=a("<div>");function o(){d.toggleClass("is-active"),c.toggleClass("is-active")}c.attr("id","toc-mask"),a("body").append(c),d.on("click",o),c.on("click",o),a(".navbar-main .catalogue").on("click",o)}}(jQuery,window.moment,window.ClipboardJS,window.IcarusThemeSettings);/**
 * Insight search plugin
 * @author PPOffice { @link https://github.com/ppoffice }
 */
// eslint-disable-next-line no-unused-vars
function loadInsight(config, translation) {
  const $main = $('.searchbox');
  const $input = $main.find('.searchbox-input');
  const $container = $main.find('.searchbox-body');

  function section(title) {
    return $('<section>').addClass('searchbox-result-section').append($('<header>').text(title));
  }

  function merge(ranges) {
    let last;
    const result = [];

    ranges.forEach((r) => {
      if (!last || r[0] > last[1]) {
        result.push((last = r));
      } else if (r[1] > last[1]) {
        last[1] = r[1];
      }
    });

    return result;
  }

  function findAndHighlight(text, matches, maxlen) {
    if (!Array.isArray(matches) || !matches.length || !text) {
      return maxlen ? text.slice(0, maxlen) : text;
    }
    const testText = text.toLowerCase();
    const indices = matches
      .map((match) => {
        const index = testText.indexOf(match.toLowerCase());
        if (!match || index === -1) {
          return null;
        }
        return [index, index + match.length];
      })
      .filter((match) => {
        return match !== null;
      })
      .sort((a, b) => {
        return a[0] - b[0] || a[1] - b[1];
      });

    if (!indices.length) {
      return text;
    }

    let result = '';
    let last = 0;
    const ranges = merge(indices);
    const sumRange = [ranges[0][0], ranges[ranges.length - 1][1]];
    if (maxlen && maxlen < sumRange[1]) {
      last = sumRange[0];
    }

    for (let i = 0; i < ranges.length; i++) {
      const range = ranges[i];
      result += text.slice(last, Math.min(range[0], sumRange[0] + maxlen));
      if (maxlen && range[0] >= sumRange[0] + maxlen) {
        break;
      }
      result += '<em>' + text.slice(range[0], range[1]) + '</em>';
      last = range[1];
      if (i === ranges.length - 1) {
        if (maxlen) {
          result += text.slice(range[1], Math.min(text.length, sumRange[0] + maxlen + 1));
        } else {
          result += text.slice(range[1]);
        }
      }
    }

    return result;
  }

  function searchItem(icon, title, slug, preview, url) {
    title = title != null && title !== '' ? title : translation.untitled;
    const subtitle = slug
      ? '<span class="searchbox-result-title-secondary">(' + slug + ')</span>'
      : '';

    return `<a class="searchbox-result-item" href="${url}">
            <span class="searchbox-result-icon">
                <i class="fa fa-${icon}" />
            </span>
            <span class="searchbox-result-content">
                <span class="searchbox-result-title">
                    ${title}
                    ${subtitle}
                </span>
                ${preview ? '<span class="searchbox-result-preview">' + preview + '</span>' : ''}
            </span>
        </a>`;
  }

  function sectionFactory(keywords, type, array) {
    let $searchItems;
    if (array.length === 0) return null;
    const sectionTitle = translation[type.toLowerCase()];
    switch (type) {
      case 'POSTS':
      case 'PAGES':
        $searchItems = array.map((item) => {
          const title = findAndHighlight(item.title, keywords);
          const text = findAndHighlight(item.text, keywords, 100);
          return searchItem('file', title, null, text, item.link);
        });
        break;
      case 'CATEGORIES':
      case 'TAGS':
        $searchItems = array.map((item) => {
          const name = findAndHighlight(item.name, keywords);
          const slug = findAndHighlight(item.slug, keywords);
          return searchItem(type === 'CATEGORIES' ? 'folder' : 'tag', name, slug, null, item.link);
        });
        break;
      default:
        return null;
    }
    return section(sectionTitle).append($searchItems);
  }

  function parseKeywords(keywords) {
    return keywords
      .split(' ')
      .filter((keyword) => {
        return !!keyword;
      })
      .map((keyword) => {
        return keyword.toLowerCase();
      });
  }

  /**
   * Judge if a given post/page/category/tag contains all of the keywords.
   * @param Object            obj     Object to be weighted
   * @param Array<String>     fields  Object's fields to find matches
   */
  function filter(keywords, obj, fields) {
    const keywordArray = parseKeywords(keywords);
    const containKeywords = keywordArray.filter((keyword) => {
      const containFields = fields.filter((field) => {
        if (!Object.prototype.hasOwnProperty.call(obj, field)) {
          return false;
        }
        if (obj[field].toLowerCase().indexOf(keyword) > -1) {
          return true;
        }
        return false;
      });
      if (containFields.length > 0) {
        return true;
      }
      return false;
    });
    return containKeywords.length === keywordArray.length;
  }

  function filterFactory(keywords) {
    return {
      post: function (obj) {
        return filter(keywords, obj, ['title', 'text']);
      },
      page: function (obj) {
        return filter(keywords, obj, ['title', 'text']);
      },
      category: function (obj) {
        return filter(keywords, obj, ['name', 'slug']);
      },
      tag: function (obj) {
        return filter(keywords, obj, ['name', 'slug']);
      },
    };
  }

  /**
   * Calculate the weight of a matched post/page/category/tag.
   * @param Object            obj     Object to be weighted
   * @param Array<String>     fields  Object's fields to find matches
   * @param Array<Integer>    weights Weight of every field
   */
  function weight(keywords, obj, fields, weights) {
    let value = 0;
    parseKeywords(keywords).forEach((keyword) => {
      const pattern = new RegExp(keyword, 'img'); // Global, Multi-line, Case-insensitive
      fields.forEach((field, index) => {
        if (Object.prototype.hasOwnProperty.call(obj, field)) {
          const matches = obj[field].match(pattern);
          value += matches ? matches.length * weights[index] : 0;
        }
      });
    });
    return value;
  }

  function weightFactory(keywords) {
    return {
      post: function (obj) {
        return weight(keywords, obj, ['title', 'text'], [3, 1]);
      },
      page: function (obj) {
        return weight(keywords, obj, ['title', 'text'], [3, 1]);
      },
      category: function (obj) {
        return weight(keywords, obj, ['name', 'slug'], [1, 1]);
      },
      tag: function (obj) {
        return weight(keywords, obj, ['name', 'slug'], [1, 1]);
      },
    };
  }

  function search(json, keywords) {
    const weights = weightFactory(keywords);
    const filters = filterFactory(keywords);
    const posts = json.posts;
    const pages = json.pages;
    const tags = json.tags;
    const categories = json.categories;
    return {
      posts: posts
        .filter(filters.post)
        .sort((a, b) => {
          return weights.post(b) - weights.post(a);
        })
        .slice(0, 5),
      pages: pages
        .filter(filters.page)
        .sort((a, b) => {
          return weights.page(b) - weights.page(a);
        })
        .slice(0, 5),
      categories: categories
        .filter(filters.category)
        .sort((a, b) => {
          return weights.category(b) - weights.category(a);
        })
        .slice(0, 5),
      tags: tags
        .filter(filters.tag)
        .sort((a, b) => {
          return weights.tag(b) - weights.tag(a);
        })
        .slice(0, 5),
    };
  }

  function searchResultToDOM(keywords, searchResult) {
    $container.empty();
    for (const key in searchResult) {
      $container.append(
        sectionFactory(parseKeywords(keywords), key.toUpperCase(), searchResult[key]),
      );
    }
  }

  function scrollTo($item) {
    if ($item.length === 0) return;
    const wrapperHeight = $container[0].clientHeight;
    const itemTop = $item.position().top - $container.scrollTop();
    const itemBottom = $item[0].clientHeight + $item.position().top;
    if (itemBottom > wrapperHeight + $container.scrollTop()) {
      $container.scrollTop(itemBottom - $container[0].clientHeight);
    }
    if (itemTop < 0) {
      $container.scrollTop($item.position().top);
    }
  }

  function selectItemByDiff(value) {
    const $items = $.makeArray($container.find('.searchbox-result-item'));
    let prevPosition = -1;
    $items.forEach((item, index) => {
      if ($(item).hasClass('active')) {
        prevPosition = index;
      }
    });
    const nextPosition = ($items.length + prevPosition + value) % $items.length;
    $($items[prevPosition]).removeClass('active');
    $($items[nextPosition]).addClass('active');
    scrollTo($($items[nextPosition]));
  }

  function gotoLink($item) {
    if ($item && $item.length) {
      location.href = $item.attr('href');
    }
  }

  $.getJSON(config.contentUrl, (json) => {
    if (location.hash.trim() === '#insight-search') {
      $main.addClass('show');
    }
    $input.on('input', function () {
      const keywords = $(this).val();
      searchResultToDOM(keywords, search(json, keywords));
    });
    $input.trigger('input');
  });

  let touch = false;
  $(document)
    .on('click focus', '.navbar-main .search', () => {
      $main.addClass('show');
      $main.find('.searchbox-input').focus();
    })
    .on('click touchend', '.searchbox-result-item', function (e) {
      if (e.type !== 'click' && !touch) {
        return;
      }
      gotoLink($(this));
      touch = false;
    })
    .on('click touchend', '.searchbox-close', (e) => {
      if (e.type !== 'click' && !touch) {
        return;
      }
      $('.navbar-main').css('pointer-events', 'none');
      setTimeout(() => {
        $('.navbar-main').css('pointer-events', 'auto');
      }, 400);
      $main.removeClass('show');
      touch = false;
    })
    .on('keydown', (e) => {
      if (!$main.hasClass('show')) return;
      switch (e.keyCode) {
        case 27: // ESC
          $main.removeClass('show');
          break;
        case 38: // UP
          selectItemByDiff(-1);
          break;
        case 40: // DOWN
          selectItemByDiff(1);
          break;
        case 13: // ENTER
          gotoLink($container.find('.searchbox-result-item.active').eq(0));
          break;
      }
    })
    .on('touchstart', (e) => {
      touch = true;
    })
    .on('touchmove', (e) => {
      touch = false;
    });
}
