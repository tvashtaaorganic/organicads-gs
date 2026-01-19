# Google Sheets Template for Programmatic Local SEO

## 📊 Sheet Name: `pages`

## Column Structure (18 columns total)

| # | Column Name | Description | Example | Required |
|---|------------|-------------|---------|----------|
| 1 | `id` | Unique ID | 1 | ✅ Yes |
| 2 | `name` | Service name | Website Design Company | ✅ Yes |
| 3 | `locationin` | Location/Area | Karnataka | ✅ Yes |
| 4 | `cityin` | City name | Tumakuru | ✅ Yes |
| 5 | `countryin` | Country | India | ✅ Yes |
| 6 | `descpost` | Description type | domestic | ✅ Yes |
| 7 | `cat` | Category | web-design | ✅ Yes |
| 8 | `titletag` | SEO Title | Website Design Company in Tumakuru - OrganicAds | ✅ Yes |
| 9 | `descriptiontag` | Meta Description | Professional website design services in Tumakuru... | ✅ Yes |
| 10 | `keywordstag` | Keywords (comma-separated) | website design tumakuru, web development tumakuru | ✅ Yes |
| 11 | `slug` | URL slug | website-design-tumakuru | ✅ Yes |
| 12 | `servicename` | Service type | webdev | ✅ Yes |
| 13 | `date` | Date added | 2026-01-09 | ✅ Yes |
| 14 | `parentslug` | Parent service slug | website-design | ⭐ New |
| 15 | `citytype` | Type of city | district-hq | ⭐ New |
| 16 | `businesstypes` | Local business types | educational institutions, manufacturing, retail | ⭐ New |
| 17 | `nearbyareas` | Sub-areas (comma-separated) | Kyathsandra, Gubbi, Siddaganga, Oorkere | ⭐ New |
| 18 | `landmarks` | Notable landmarks | Siddaganga Mutt, Devarayanadurga | ⭐ New |

---

## 📝 Sample Data Rows

### Example 1: Tumakuru (District HQ)
```
1 | Website Design Company | Karnataka | Tumakuru | India | domestic | web-design | Website Design Company in Tumakuru - Professional Web Development | Professional website design and development services in Tumakuru. Custom websites for businesses, e-commerce, and startups. | website design tumakuru, web development tumakuru, website company tumakuru | website-design-tumakuru | webdev | 2026-01-09 | website-design | district-hq | educational institutions, manufacturing units, retail businesses | Kyathsandra, Gubbi, Siddaganga, Oorkere, Koratagere | Siddaganga Mutt, Devarayanadurga
```

### Example 2: Mysuru (Tourist City)
```
2 | Website Design Company | Karnataka | Mysuru | India | domestic | web-design | Website Design Company in Mysuru - Tourism & Hospitality Websites | Expert website design for tourism, hotels, and businesses in Mysuru. Beautiful, booking-ready websites. | website design mysuru, web development mysuru, hotel website mysuru | website-design-mysuru | webdev | 2026-01-09 | website-design | tourist-city | hotels, resorts, tour operators, restaurants | Chamundi Hills, Jayanagar, Vijayanagar, Gokulam | Mysore Palace, Chamundi Temple, Brindavan Gardens
```

### Example 3: Sira (Town)
```
3 | Website Design Company | Karnataka | Sira | India | domestic | web-design | Website Design Company in Sira - Affordable Web Solutions | Affordable website design services for Sira businesses. Professional websites for local traders and enterprises. | website design sira, web development sira, website company sira | website-design-sira | webdev | 2026-01-09 | website-design | town | textile businesses, trading companies, local retailers | Madhugiri, Pavagada, Koratagere | Sira Fort, Textile Market
```

### Example 4: Bangalore (Metro)
```
4 | Website Design Company | Karnataka | Bangalore | India | domestic | web-design | Website Design Company in Bangalore - Enterprise Web Solutions | Enterprise-grade website design and development in Bangalore. Scalable solutions for startups and corporations. | website design bangalore, web development bangalore, website company bangalore | website-design-bangalore | webdev | 2026-01-09 | website-design | metro | IT companies, startups, e-commerce, corporate enterprises | Koramangala, Indiranagar, Whitefield, HSR Layout, Jayanagar | MG Road, Cubbon Park, UB City
```

---

## 🎯 City Type Values

Use these exact values for the `citytype` column:

| City Type | When to Use | Example Cities |
|-----------|-------------|----------------|
| `metro` | Major metropolitan cities | Bangalore, Mumbai, Delhi |
| `district-hq` | District headquarters | Tumakuru, Mandya, Hassan |
| `tourist-city` | Tourist destinations | Mysuru, Coorg, Hampi |
| `town` | Smaller towns | Sira, Tiptur, Kunigal |
| `industrial` | Industrial hubs | Peenya, Hosur, Belgaum |

---

## 🏢 Business Types Examples

Customize based on what businesses actually exist in that city:

### District HQ
```
educational institutions, manufacturing units, retail businesses, service providers
```

### Tourist City
```
hotels, resorts, tour operators, restaurants, homestays, travel agencies
```

### Metro
```
IT companies, startups, e-commerce businesses, corporate enterprises, consulting firms
```

### Town
```
textile businesses, trading companies, local retailers, agricultural businesses
```

### Industrial
```
manufacturing units, industrial suppliers, B2B companies, logistics providers
```

---

## 📍 Nearby Areas Guidelines

### ✅ DO:
- Use **real** sub-areas, localities, or nearby towns
- Separate with commas
- 4-8 areas is ideal
- Use proper spelling

### ❌ DON'T:
- Make up fake areas
- Use too many (max 10)
- Use areas from different cities

### Examples:

**Tumakuru:**
```
Kyathsandra, Gubbi, Siddaganga, Oorkere, Koratagere, Tiptur
```

**Mysuru:**
```
Chamundi Hills, Jayanagar, Vijayanagar, Gokulam, Hebbal, Saraswathipuram
```

**Bangalore:**
```
Koramangala, Indiranagar, Whitefield, HSR Layout, Jayanagar, Marathahalli, Electronic City
```

---

## 🏛️ Landmarks Examples

Add 1-3 notable landmarks that people know:

**Tumakuru:**
```
Siddaganga Mutt, Devarayanadurga, Goravanahalli Mahalakshmi Temple
```

**Mysuru:**
```
Mysore Palace, Chamundi Temple, Brindavan Gardens
```

**Bangalore:**
```
MG Road, Cubbon Park, Lalbagh, Vidhana Soudha
```

---

## 🔑 SEO Title & Description Guidelines

### Title Tag Format:
```
{Service Name} in {City} - {Unique Value Proposition}
```

**Examples:**
- `Website Design Company in Tumakuru - Professional Web Development`
- `SEO Services in Mysuru - Boost Your Tourism Business Online`
- `Digital Marketing in Bangalore - Enterprise Solutions`

### Description Tag Format:
```
{Service description} in {City}. {Unique benefit}. {Call to action}.
```

**Examples:**
- `Professional website design and development services in Tumakuru. Custom websites for local businesses, e-commerce, and startups. Get a free consultation today.`
- `Expert SEO services for Mysuru tourism businesses. Rank higher, attract more visitors, increase bookings. Specialized in hospitality SEO.`

---

## 🎯 Slug Naming Convention

### Current Format (Keep for now):
```
website-design-tumakuru
seo-services-mysuru
digital-marketing-bangalore
```

### Future Hierarchical Format (Coming Soon):
```
website-design/tumakuru
seo-services/mysuru
digital-marketing/bangalore
```

**Note:** We'll implement the hierarchical URL structure in the next phase. For now, use the current format.

---

## 📋 Quick Checklist for Each Row

Before adding a new city page, ensure:

- [ ] City name is spelled correctly
- [ ] City type matches the actual city (metro/district-hq/tourist-city/town/industrial)
- [ ] Business types reflect real businesses in that city
- [ ] Nearby areas are **real** sub-areas or localities
- [ ] Landmarks are well-known and real
- [ ] Title tag is unique and includes city name
- [ ] Description tag is unique and mentions city 2-3 times
- [ ] Keywords include city name
- [ ] Slug is unique and follows format

---

## 🚀 Publishing Strategy

### Phase 1: Test (Week 1)
Add **5-10 cities** only:
- 2-3 major cities (metros)
- 2-3 district headquarters
- 1-2 smaller towns

### Phase 2: Monitor (Week 2-3)
- Check Google Search Console
- Monitor indexing status
- Check for any issues

### Phase 3: Expand (Week 4+)
- Add 5-10 more cities per week
- Monitor continuously
- Adjust strategy based on results

---

## ⚠️ Critical Rules

1. **Never publish 100+ pages at once** - Google will flag as spam
2. **Each city must have unique content** - Use different business types, areas, landmarks
3. **Only use real locations** - No fake areas or landmarks
4. **Monitor Search Console** - Check indexing weekly
5. **Quality over quantity** - 20 great pages > 100 poor pages

---

## 🔗 Next Steps

1. **Open your Google Sheet:** `1alHg2OqxjX-m8J7Z6bxeJ38JGCT3paK1oDu1sP1D76Y`
2. **Add 5 new columns** (14-18): `parentslug`, `citytype`, `businesstypes`, `nearbyareas`, `landmarks`
3. **Fill sample data** for 5-10 cities using the examples above
4. **Test locally** to verify data is fetching correctly
5. **Deploy gradually** - 5-10 pages at a time

---

## 📞 Need Help?

If you're unsure about:
- What city type to use
- What business types exist in a city
- What nearby areas to include
- How to write unique descriptions

Just ask! It's better to get it right than to rush and create duplicate content.
