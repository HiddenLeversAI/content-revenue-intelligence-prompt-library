# Survey Data Clusterer

## Purpose
Group and analyze survey responses to identify distinct buyer segments, behavioral patterns, and actionable audience insights for targeted content and product strategy.

## When to Use
- Analyzing welcome survey responses
- Segmenting email lists based on survey data
- Identifying content gaps and opportunities
- Creating buyer personas from real data
- Developing targeted messaging strategies

## Inputs Required

### Survey Response Data
- **Raw survey responses**: Complete dataset with all fields - demographics, pain points, preferences, budget responses, urgency indicators
- **Response volume**: Total number of completed surveys and completion rates
- **Data collection timeframe**: When responses were gathered and any seasonal considerations
- **Question types and formats**: Multiple choice options, scale responses, open-ended text, and rating data
- **Response quality indicators**: Complete vs. partial responses, engagement levels, and data reliability metrics

### Business Context Information
- **Industry/niche details**: Your specific market sector, competitive landscape, and business model
- **Product/service portfolio**: Current offerings, price points, and positioning in the market
- **Target market definition**: Existing customer profiles, ideal customer characteristics, and market size
- **Revenue and pricing structure**: Price ranges, subscription models, and value propositions
- **Customer lifecycle stages**: How subscribers typically progress from awareness to purchase

### Analysis Parameters
- **Segmentation objectives**: Specific business goals for audience grouping (content targeting, product development, etc.)
- **Statistical preferences**: Desired confidence levels, sample size considerations, and significance thresholds
- **Segment size requirements**: Minimum viable segment sizes for marketing and content strategy
- **Behavioral data context**: Purchase history, engagement patterns, and content consumption data if available
- **External data sources**: Additional customer data, market research, or competitive intelligence to inform clustering

## Prompt

```
You are a data analysis expert specializing in audience segmentation and behavioral clustering. Your task is to analyze survey response data and group replies into meaningful buyer segments that can drive content strategy and product development.

**Survey Data to Analyze:**
[PASTE YOUR SURVEY RESPONSES - Include all fields: demographics, pain points, preferences, budget, urgency, etc.]

**Business Context:**
- Industry/niche: [YOUR BUSINESS SECTOR]
- Products/services offered: [LIST YOUR OFFERINGS]
- Target market: [DESCRIBE YOUR MARKET]
- Price points: [YOUR PRICE RANGES]

**Clustering Objectives:**
1. Identify 3-5 distinct buyer segments
2. Map segment characteristics and behaviors
3. Determine content preferences by segment
4. Assess buying readiness and budget alignment
5. Uncover unexpected patterns or insights

**Analysis Framework:**
- **Demographic Clustering**: Age, location, role, company size
- **Psychographic Clustering**: Values, motivations, preferred communication
- **Behavioral Clustering**: Engagement patterns, purchase history, content consumption
- **Need-State Clustering**: Pain point urgency, solution awareness, timeline
- **Value Clustering**: Budget capacity, ROI expectations, investment patterns

**Output Requirements:**
1. **Segment Profiles** (3-5 segments):
   - Segment name and description
   - Key characteristics and demographics
   - Primary pain points and motivations
   - Content preferences and consumption habits
   - Buying behavior and budget patterns
   - Percentage of total audience

2. **Segment Messaging Framework**:
   - Core value proposition for each segment
   - Preferred communication style
   - Content topics and formats
   - Objections and concerns to address

3. **Content Strategy Recommendations**:
   - Content calendar priorities by segment
   - Lead magnet ideas for each group
   - Email sequence strategies
   - Product positioning adjustments

4. **Unexpected Insights**:
   - Surprising patterns or correlations
   - Underserved segment opportunities
   - Market gaps or unmet needs
   - Messaging misalignments

**Analysis Methods:**
- Look for correlation patterns between variables
- Identify response clusters and commonalities
- Calculate segment sizes and overlap
- Map customer journey stages by segment
- Highlight statistical significance and confidence levels

Provide actionable segmentation that transforms raw survey data into strategic audience intelligence for improved targeting and conversion.
```

## Example Output Structure

### Segment Profiles
**Segment 1: "Ready Buyers" (25%)**
- Demographics: [Profile details]
- Pain points: [Urgent challenges]
- Budget: [Investment capacity]
- Content preferences: [Format/topic preferences]

### Messaging Framework
- Segment-specific value propositions
- Communication tone and style guidelines
- Key messaging pillars per segment

### Content Strategy
- Priority content topics by segment
- Recommended content formats
- Email sequence customization
- Lead magnet optimization

### Unexpected Insights
- Market gaps identified
- Correlation discoveries
- Segment overlap patterns

## Tips for Implementation
- Use statistical tools for larger datasets
- Validate segments with additional research
- Test messaging with each segment
- Monitor segment performance over time
- Refine clustering based on results

## Related Prompts
- Welcome Survey Builder (for data collection)
- Language Summary Extractor (for copy insights)
- Trend Detector (for pattern analysis)